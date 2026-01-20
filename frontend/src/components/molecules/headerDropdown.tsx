import { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  subtitle?: string;
  hasChevron?: boolean;
  subItems?: { label: string; onClick: () => void; isActive?: boolean }[];
}

interface HeaderDropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
}

export const HeaderDropdown = ({ trigger, items, align = 'right' }: HeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 transition-colors ${
          isOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
        }`}
      >
        {trigger}
      </button>
      {isOpen && (
        <div className={`absolute top-full w-40 bg-white border border-gray-200 shadow-lg z-50 ${
          align === 'left' ? '-left-2' : '-right-2'
        }`} style={{ marginTop: '6px' }}>
          {items.map((item, index) => (
            <div key={index} className="relative"
              onMouseEnter={() => item.subItems && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => {
                  if (!item.subItems) {
                    item.onClick();
                    setIsOpen(false);
                  }
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between gap-3"
                style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                <div className="flex items-center gap-3">
                  {item.icon && <span className="text-gray-600">{item.icon}</span>}
                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    {item.subtitle && <span className="text-xs text-gray-500">{item.subtitle}</span>}
                  </div>
                </div>
                {item.hasChevron && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-gray-400">
                    <path d="M10 8L6 4L6 12Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
              {item.subItems && hoveredIndex === index && (
                <div className="absolute right-full top-0 w-32 bg-white border border-gray-200 shadow-lg z-50" style={{ marginRight: '2px' }}>
                  {item.subItems.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => {
                        subItem.onClick();
                        setIsOpen(false);
                        setHoveredIndex(null);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
                      style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                    >
                      <span>{subItem.label}</span>
                      {subItem.isActive && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                          <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
