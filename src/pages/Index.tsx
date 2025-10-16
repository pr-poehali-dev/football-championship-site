import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'matches', label: 'Матчи', icon: 'Calendar' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'standings', label: 'Турнирная таблица', icon: 'Trophy' },
    { id: 'teams', label: 'Команды', icon: 'Users' },
  ];

  const matches = [
    {
      id: 1,
      team1: 'Dynamo',
      team2: 'Spartak',
      score: '2 - 1',
      date: '15 октября',
      time: '19:00',
      status: 'Завершен',
      badge1: '🔵',
      badge2: '🔴',
    },
    {
      id: 2,
      team1: 'CSKA',
      team2: 'Zenit',
      score: '1 - 3',
      date: '15 октября',
      time: '21:00',
      status: 'Завершен',
      badge1: '🔴',
      badge2: '⚪',
    },
    {
      id: 3,
      team1: 'Lokomotiv',
      team2: 'Krasnodar',
      score: '- : -',
      date: '16 октября',
      time: '18:00',
      status: 'Предстоит',
      badge1: '🔴',
      badge2: '🟢',
    },
  ];

  const news = [
    {
      id: 1,
      title: 'Динамо одерживает волевую победу над Спартаком',
      excerpt: 'В напряженном матче столичного дерби команда Динамо смогла вырвать победу со счетом 2:1',
      date: '15 октября 2025',
      category: 'Матчи',
    },
    {
      id: 2,
      title: 'Зенит продолжает победную серию',
      excerpt: 'Питерский клуб одержал уверенную победу над ЦСКА и укрепил лидерство в турнирной таблице',
      date: '15 октября 2025',
      category: 'Обзор',
    },
    {
      id: 3,
      title: 'Анонс: Локомотив против Краснодара',
      excerpt: 'Завтра состоится матч между двумя сильнейшими командами сезона. Прогнозы экспертов разделились',
      date: '16 октября 2025',
      category: 'Анонсы',
    },
  ];

  const upcomingEvents = [
    { date: '16 окт', title: 'Локомотив - Краснодар', time: '18:00' },
    { date: '17 окт', title: 'Ростов - Спартак', time: '19:30' },
    { date: '17 окт', title: 'Динамо - Зенит', time: '21:00' },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <aside className="w-64 bg-sidebar text-sidebar-foreground fixed h-screen left-0 top-0 shadow-xl animate-slide-in">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Trophy" size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">FOOTBALL</h1>
              <p className="text-xs text-sidebar-foreground/70">CHAMPIONSHIP</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
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

      <main className="ml-64 flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <img
              src="https://cdn.poehali.dev/projects/1f517951-a5c9-4948-a363-5ff3bd813851/files/c4497e57-8a78-4a5a-a810-8648a478bf5b.jpg"
              alt="Stadium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 text-white">
                <Badge className="mb-3 bg-primary border-0 text-white font-bold">
                  LIVE СЕЙЧАС
                </Badge>
                <h2 className="text-4xl font-bold mb-2">Футбольный Чемпионат 2025</h2>
                <p className="text-lg text-white/90">
                  Следите за всеми матчами, новостями и событиями турнира
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Icon name="Calendar" size={28} className="text-primary" />
                  Матчи
                </h3>
                <Button variant="outline" size="sm">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Фильтр
                </Button>
              </div>

              <div className="space-y-4">
                {matches.map((match, index) => (
                  <Card
                    key={match.id}
                    className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 pb-3">
                      <div className="flex justify-between items-center">
                        <Badge
                          variant={match.status === 'Завершен' ? 'secondary' : 'default'}
                          className="font-bold"
                        >
                          {match.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          {match.date} • {match.time}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <span className="text-3xl">{match.badge1}</span>
                          <span className="font-bold text-lg">{match.team1}</span>
                        </div>
                        <div className="px-6">
                          <div className="text-3xl font-black text-center min-w-[100px]">
                            {match.score}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-1 justify-end">
                          <span className="font-bold text-lg">{match.team2}</span>
                          <span className="text-3xl">{match.badge2}</span>
                        </div>
                      </div>
                      {match.status === 'Предстоит' && (
                        <Button className="w-full mt-4" variant="outline">
                          <Icon name="Bell" size={16} className="mr-2" />
                          Напомнить о матче
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Newspaper" size={28} className="text-primary" />
                  Новости и анонсы
                </h3>
                <div className="space-y-4">
                  {news.map((item, index) => (
                    <Card
                      key={item.id}
                      className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {item.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{item.date}</span>
                            </div>
                            <CardTitle className="text-lg mb-2 hover:text-primary transition-colors">
                              {item.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                          </div>
                          <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0 shadow-xl animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Icon name="Zap" size={24} />
                    Предстоящие события
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 rounded px-2 py-1">
                            <div className="text-xs font-bold">{event.date}</div>
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{event.title}</div>
                            <div className="text-xs text-white/80 flex items-center gap-1">
                              <Icon name="Clock" size={12} />
                              {event.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                    Топ бомбардиров
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: 'Иванов А.', team: 'Зенит', goals: 12 },
                    { name: 'Петров С.', team: 'Динамо', goals: 10 },
                    { name: 'Сидоров М.', team: 'ЦСКА', goals: 9 },
                  ].map((player, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-xs text-muted-foreground">{player.team}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 font-bold text-lg">
                        <Icon name="Target" size={16} className="text-primary" />
                        {player.goals}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
