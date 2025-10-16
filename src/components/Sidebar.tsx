import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home', path: '/' },
    { id: 'divisions', label: 'Дивизионы', icon: 'Shield', path: '/divisions' },
    { id: 'stadiums', label: 'Стадионы', icon: 'MapPin', path: '/stadiums' },
    { id: 'news', label: 'Новости', icon: 'Newspaper', path: '/news' },
    { id: 'register', label: 'Заявиться', icon: 'UserPlus', path: '/register' },
    { id: 'documents', label: 'Документы', icon: 'FileText', path: '/documents' },
    { id: 'partners', label: 'Партнеры', icon: 'Handshake', path: '/partners' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone', path: '/contacts' },
  ];

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground fixed h-screen left-0 top-0 shadow-xl animate-slide-in z-50">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Trophy" size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-tight">Первенство по футболу</h1>
            <p className="text-xs text-sidebar-foreground/70 leading-tight">САО (детско-юношеские)</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-180px)]">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === item.path
                ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg scale-105'
                : 'hover:bg-sidebar-accent/50 text-sidebar-foreground/80 hover:text-sidebar-foreground'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Icon name={item.icon as any} size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2 text-xs text-sidebar-foreground/60">
          <Icon name="Calendar" size={14} />
          <span>Сезон 2025/2026</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
