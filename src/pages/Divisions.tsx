import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Divisions = () => {
  const divisions = [
    {
      id: 1,
      name: 'Премьер Дивизион',
      level: 'Высший',
      teams: 16,
      color: 'from-primary to-red-600',
      icon: 'Trophy',
      topTeams: ['Зенит', 'Динамо', 'ЦСКА', 'Спартак'],
    },
    {
      id: 2,
      name: 'Первый Дивизион',
      level: 'Первая лига',
      teams: 18,
      color: 'from-secondary to-blue-600',
      icon: 'Medal',
      topTeams: ['Торпедо', 'Сочи', 'Нижний Новгород', 'Балтика'],
    },
    {
      id: 3,
      name: 'Второй Дивизион',
      level: 'Вторая лига',
      teams: 20,
      color: 'from-accent to-yellow-600',
      icon: 'Award',
      topTeams: ['Енисей', 'Чайка', 'Волга', 'Химки'],
    },
  ];

  const divisionStats = [
    { label: 'Всего команд', value: '54', icon: 'Users' },
    { label: 'Активных дивизионов', value: '3', icon: 'Shield' },
    { label: 'Матчей за сезон', value: '486', icon: 'Calendar' },
    { label: 'Путевок в еврокубки', value: '5', icon: 'Star' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Shield" size={36} className="text-primary" />
            <h1 className="text-4xl font-bold">Дивизионы</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Первенство по футболу среди детско-юношеских команд САО
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {divisionStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={stat.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          {divisions.map((division, index) => (
            <Card
              key={division.id}
              className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${division.color}`} />
              <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${division.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon name={division.icon as any} size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-1">{division.name}</CardTitle>
                      <Badge variant="secondary" className="font-semibold">
                        {division.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{division.teams}</div>
                    <div className="text-sm text-muted-foreground">команд</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                      <Icon name="TrendingUp" size={16} />
                      Топ команды дивизиона
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {division.topTeams.map((team, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted transition-colors"
                        >
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span className="font-medium text-sm">{team}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Calendar" size={16} />
                        <span>Раундов: {division.teams * 2 - 2}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Target" size={16} />
                        <span>Матчей: {(division.teams * (division.teams - 1))}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
                      Подробнее
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Info" size={24} className="text-primary" />
              Система повышения и понижения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="ArrowUp" size={20} className="text-green-600" />
                  <h4 className="font-bold">Повышение</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Топ-2 команды каждого дивизиона автоматически повышаются в следующий дивизион
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="ArrowDown" size={20} className="text-red-600" />
                  <h4 className="font-bold">Понижение</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Последние 2 команды дивизиона переходят на уровень ниже по итогам сезона
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Shuffle" size={20} className="text-primary" />
                  <h4 className="font-bold">Стыковые матчи</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Команды с 3-го по 5-е место играют стыковые матчи за право повышения
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Divisions;