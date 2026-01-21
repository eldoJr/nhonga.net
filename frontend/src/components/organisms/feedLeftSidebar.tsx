import { Home, Briefcase, Users, GraduationCap, Bell, Bookmark, MessageCircle, MapPin } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const feedLeftSidebar = () => {
  const { user } = useAuth();
  
  const menuItems = [
    { icon: Home, label: 'Início', active: true },
    { icon: MessageCircle, label: 'Mensagens', count: 5 },
    { icon: Briefcase, label: 'Empregos', count: 23 },
    { icon: Users, label: 'Networking', count: 156 },
    { icon: GraduationCap, label: 'Académico', count: 12 },
    { icon: Bell, label: 'Notificações', count: 8 },
    { icon: Bookmark, label: 'Guardados' }
  ];

  return (
    <div className="space-y-4">
      {/* User Profile Card */}
      <div className="bg-white border border-nhonga-200 overflow-hidden rounded-lg">
        <div className="h-20 bg-gradient-to-r from-nhonga-400 to-nhonga-600"></div>
        <div className="px-4 pb-4">
          <div className="-mt-10 mb-3">
            <img
              src="https://eldomacuacua-github.vercel.app/static/e02f95899e580ac370d0bf0232cd0e49/b8244/me.webp"
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
          </div>
          <h3 className="font-bold text-nhonga-900 font-heading">{user ? `${user.firstName} ${user.lastName}` : 'Usuário'}</h3>
          <p className="text-sm text-nhonga-600 font-body mb-1">🕵️Web Dev | AI-ML Enthusiast. 🎓 IT Graduand @ Parul University</p>
          <div className="flex items-center gap-1 text-xs text-nhonga-500 font-body">
            <MapPin className="w-3 h-3" />
            <span>Inhambane, Moçambique</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border border-nhonga-200 p-4 rounded-lg">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between p-3 hover:bg-nhonga-50 transition-colors ${
                item.active ? 'bg-nhonga-50 border-l-4 border-primary' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${item.active ? 'text-primary' : 'text-nhonga-600'}`} />
                <span className={`text-sm font-body ${item.active ? 'text-primary font-semibold' : 'text-nhonga-700'}`}>
                  {item.label}
                </span>
              </div>
              {item.count && (
                <span className="text-xs font-semibold text-white bg-primary px-2 py-1 rounded-full">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
