import { useState } from 'react'
import { clsx } from 'clsx'
import {
    HiOutlineMagnifyingGlass,
    HiOutlineBriefcase,
    HiOutlineWrenchScrewdriver,
    HiOutlineAcademicCap,
    HiOutlineUserGroup,
    HiOutlineCalendar,
    HiOutlineSparkles,
    HiOutlineAdjustmentsHorizontal,
    HiOutlineShoppingBag,
    HiOutlineClock,
    HiArrowRight,
    HiChevronDown,
    HiOutlineBookmark,
    HiOutlineXMark,
} from 'react-icons/hi2'

const tabs = [
    { key: 'all', label: 'All', icon: HiOutlineSparkles },
    { key: 'jobs', label: 'Jobs', icon: HiOutlineBriefcase },
    { key: 'professional', label: 'Professional', icon: HiOutlineUserGroup },
    { key: 'biscates', label: 'Biscates', icon: HiOutlineWrenchScrewdriver },
    { key: 'daily', label: 'Daily Services', icon: HiOutlineClock },
    { key: 'marketplace', label: 'Marketplace', icon: HiOutlineShoppingBag },
    { key: 'scholarships', label: 'Scholarships', icon: HiOutlineAcademicCap },
    { key: 'events', label: 'Events', icon: HiOutlineCalendar },
] as const

type TabKey = typeof tabs[number]['key']

export default function ExplorePage() {
    const [activeTab, setActiveTab] = useState<TabKey>('all')
    const [search, setSearch] = useState('')

    return (
        <div className="max-w-6xl mx-auto space-y-5">
            {/* Search bar */}
            <div className="relative">
                <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search jobs, biscates, services, marketplace…"
                    className="w-full pl-12 pr-12 py-3.5 rounded-2xl text-[14px] bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-800/70 text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:border-nhonga-400 dark:focus:border-nhonga-600 focus:ring-2 focus:ring-nhonga-400/10 transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-colors cursor-pointer">
                    <HiOutlineAdjustmentsHorizontal className="w-5 h-5" />
                </button>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
                {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={clsx(
                                'flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-medium transition-all cursor-pointer whitespace-nowrap shrink-0',
                                activeTab === tab.key
                                    ? 'bg-nhonga-500 text-white shadow-sm'
                                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.03] border border-gray-200/70 dark:border-gray-800/70',
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            {/* Body */}
            {activeTab === 'all' && (
                <div className="space-y-8">
                    <EmptySection title="Recommended for you" message="No recommendations yet" hint="We'll suggest content based on your activity" />
                    <MostPopularGrid />
                </div>
            )}

            {activeTab === 'jobs' && (
                <div className="space-y-8">
                    <EmptySection title="Jobs near you" message="No jobs found in your area" hint="Try expanding your location preferences" />
                    <EmptySection title="Recently posted" message="No recent job listings" hint="New opportunities are added daily" />
                    <EmptySection title="Top companies hiring" message="No featured companies yet" hint="Companies actively hiring will show here" />
                </div>
            )}

            {activeTab === 'professional' && (
                <div className="space-y-8">
                    <EmptySection title="Featured professionals" message="No professionals to show" hint="Top-rated professionals in your network will appear here" />
                    <EmptySection title="Services you might need" message="No services available" hint="Professional services will be listed here" />
                </div>
            )}

            {activeTab === 'biscates' && (
                <div className="space-y-8">
                    <EmptySection title="Available biscates" message="No biscates posted yet" hint="Quick gigs and side jobs will appear here" />
                    <EmptySection title="Urgent requests" message="No urgent requests" hint="Time-sensitive gigs will be highlighted here" />
                </div>
            )}

            {activeTab === 'daily' && (
                <div className="space-y-8">
                    <EmptySection title="Today's services" message="No services available today" hint="One-day and local service requests will show here" />
                    <EmptySection title="Near you" message="No nearby services" hint="Enable location to see services in your area" />
                    <EmptySection title="Recently completed" message="No completed services yet" hint="Past service history will appear here" />
                </div>
            )}

            {activeTab === 'marketplace' && (
                <div className="space-y-8">
                    <EmptySection title="New listings" message="No items listed yet" hint="Products and services for sale will appear here" />
                    <EmptySection title="Popular categories" message="No categories to show" hint="Browse by category once items are available" />
                    <EmptySection title="Deals near you" message="No local deals" hint="Marketplace items in your area will show here" />
                </div>
            )}

            {activeTab === 'scholarships' && (
                <div className="space-y-8">
                    <EmptySection title="Closing soon" message="No upcoming deadlines" hint="Scholarships with approaching deadlines will appear here" />
                    <EmptySection title="Matching your profile" message="No matches found" hint="Complete your profile to get personalized scholarship suggestions" />
                    <EmptySection title="Fully funded" message="No fully funded scholarships" hint="Full-funding opportunities will be highlighted here" />
                </div>
            )}

            {activeTab === 'events' && (
                <div className="space-y-8">
                    <EmptySection title="Upcoming events" message="No events scheduled" hint="Conferences, meetups, and workshops will appear here" />
                    <EmptySection title="Events in Maputo" message="No local events" hint="Events happening near you will show here" />
                </div>
            )}
        </div>
    )
}

const popularItems = [
    { category: 'SAÚDE', title: 'Enfermeiro', description: 'Alta demanda em hospitais públicos e privados em todo Moçambique.', spotlight: 'Mais procurado', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80' },
    { category: 'CONSTRUÇÃO', title: 'Pedreiro', description: 'Crescimento do setor imobiliário cria oportunidades em todas as províncias.', spotlight: 'Em alta', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80' },
    { category: 'AGRICULTURA', title: 'Técnico Agrícola', description: 'Apoio ao desenvolvimento rural e projetos de segurança alimentar.', spotlight: 'Crescimento rápido', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80' },
    { category: 'TRANSPORTE', title: 'Motorista', description: 'Transporte público, privado e logística em expansão no país.', spotlight: 'Alta demanda', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80' },
    { category: 'EDUCAÇÃO', title: 'Professor Primário', description: 'Necessidade crítica de professores em escolas rurais e urbanas.', spotlight: 'Urgente', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&q=80' },
    { category: 'COMÉRCIO', title: 'Vendedor', description: 'Oportunidades em lojas, mercados e comércio informal em crescimento.', spotlight: 'Popular', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80' },
    { category: 'SEGURANÇA', title: 'Guarda de Segurança', description: 'Proteção de empresas, residências e eventos em todo o país.', spotlight: 'Estável', image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&q=80' },
    { category: 'SERVIÇOS', title: 'Empregada Doméstica', description: 'Serviços domésticos com alta procura em áreas urbanas.', spotlight: 'Sempre em procura', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80' },
]

const INITIAL_COUNT = 8

function PopularCard({ item }: { item: typeof popularItems[number] }) {
    return (
        <div className="flex flex-col">
            <div className="relative w-full h-[140px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide bg-white/90 dark:bg-black/60 text-nhonga-700 dark:text-nhonga-400 backdrop-blur-sm">
                    {item.spotlight}
                </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mt-3">
                {item.category}
            </span>
            <h4 className="text-[14px] font-bold text-gray-900 dark:text-white mt-0.5 leading-snug">
                {item.title}
            </h4>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed flex-1">
                {item.description}
            </p>
            <div className="flex items-center justify-between mt-3">
                <button className="flex items-center gap-1.5 text-[12px] font-semibold text-nhonga-600 dark:text-nhonga-400 hover:text-nhonga-700 dark:hover:text-nhonga-300 transition-colors cursor-pointer group">
                    Candidatar-se
                    <HiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <div className="flex items-center gap-1">
                    <button className="p-1 rounded-lg text-gray-300 dark:text-gray-600 hover:text-nhonga-500 dark:hover:text-nhonga-400 hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-colors cursor-pointer" title="Guardar">
                        <HiOutlineBookmark className="w-4 h-4" />
                    </button>
                    <button className="p-1 rounded-lg text-gray-300 dark:text-gray-600 hover:text-red-400 hover:bg-gray-50 dark:hover:bg-white/[0.04] transition-colors cursor-pointer" title="Não tenho interesse">
                        <HiOutlineXMark className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}

function MostPopularGrid() {
    const [showAll, setShowAll] = useState(false)
    const visible = showAll ? popularItems : popularItems.slice(0, INITIAL_COUNT)
    const cols = 4
    const rows: typeof popularItems[] = []
    for (let i = 0; i < visible.length; i += cols) rows.push(visible.slice(i, i + cols))

    return (
        <div>
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-white mb-3">Most popular</h3>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-5">
                {rows.map((row, ri) => (
                    <div key={ri}>
                        {ri > 0 && <div className="border-t border-gray-100 dark:border-gray-800 my-6" />}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            {row.map((item, ci) => (
                                <div key={item.title} className="flex">
                                    {ci > 0 && (
                                        <div className="hidden lg:flex items-center pr-5">
                                            <div className="w-px h-3/4 bg-gray-100 dark:bg-gray-800" />
                                        </div>
                                    )}
                                    <div className={clsx('flex-1', ci > 0 ? '' : 'pr-5', ci > 0 && ci < row.length - 1 && 'pr-5')}>
                                        <PopularCard item={item} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {popularItems.length > INITIAL_COUNT && (
                    <div className="flex justify-center mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                        <button
                            onClick={() => setShowAll((v) => !v)}
                            className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-[12px] font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors cursor-pointer"
                        >
                            {showAll ? 'Show less' : 'Show more'}
                            <HiChevronDown className={clsx('w-4 h-4 transition-transform', showAll && 'rotate-180')} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

function EmptySection({ title, message, hint }: { title: string; message: string; hint: string }) {
    return (
        <div>
            <h3 className="text-[15px] font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-10 text-center">
                <p className="text-[13px] text-gray-400">{message}</p>
                <p className="text-[11px] text-gray-300 dark:text-gray-600 mt-1">{hint}</p>
            </div>
        </div>
    )
}
