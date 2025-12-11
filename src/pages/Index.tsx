import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'portfolio' | 'education' | 'resume' | 'achievements';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigation = [
    { id: 'home' as Page, label: 'Главная', icon: 'Home' },
    { id: 'portfolio' as Page, label: 'Портфолио', icon: 'Briefcase' },
    { id: 'education' as Page, label: 'Образование', icon: 'GraduationCap' },
    { id: 'resume' as Page, label: 'Резюме', icon: 'FileText' },
    { id: 'achievements' as Page, label: 'Достижения', icon: 'Award' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="text-primary" size={28} />
              <h1 className="text-xl font-semibold">Маняпов Артём</h1>
            </div>
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'default' : 'ghost'}
                  className="flex items-center space-x-2"
                  onClick={() => setCurrentPage(item.id)}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={setCurrentPage} />}
        {currentPage === 'education' && <EducationPage onNavigate={setCurrentPage} />}
        {currentPage === 'resume' && <ResumePage onNavigate={setCurrentPage} />}
        {currentPage === 'achievements' && <AchievementsPage />}
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg">
        <div className="flex justify-around py-2">
          {navigation.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center space-y-1"
              onClick={() => setCurrentPage(item.id)}
            >
              <Icon name={item.icon} size={20} className={currentPage === item.id ? 'text-primary' : ''} />
              <span className={`text-xs ${currentPage === item.id ? 'text-primary font-medium' : ''}`}>
                {item.label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Маняпов Артём
            </h2>
            <p className="text-xl text-muted-foreground mb-2">Студент</p>
            <div className="space-y-3 text-foreground/90">
              <p className="flex items-start">
                <Icon name="School" size={20} className="mr-2 mt-1 text-primary flex-shrink-0" />
                <span>ГБПОУ "Южно-Уральский Государственный Колледж"</span>
              </p>
              <p className="flex items-start">
                <Icon name="GraduationCap" size={20} className="mr-2 mt-1 text-primary flex-shrink-0" />
                <span>08.02.01 Строительство и эксплуатация зданий и сооружений</span>
              </p>
              <p className="flex items-center">
                <Icon name="MapPin" size={20} className="mr-2 text-primary flex-shrink-0" />
                <span>Челябинск</span>
              </p>
              <p className="flex items-center">
                <Icon name="Calendar" size={20} className="mr-2 text-primary flex-shrink-0" />
                <span>Срок обучения: 2024-2028</span>
              </p>
            </div>
            <div className="mt-8">
              <Button onClick={() => onNavigate('portfolio')} size="lg" className="mr-3">
                Портфолио
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button onClick={() => onNavigate('resume')} variant="outline" size="lg">
                Резюме
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://cdn.poehali.dev/files/сайт 1.jpg"
              alt="Маняпов Артём"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  return (
    <div className="container mx-auto px-4 py-12 pb-24 md:pb-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Портфолио</h2>
        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Моя карьерная лестница</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Icon name="Target" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Этап 1: Обучение и практика</h4>
                <p className="text-muted-foreground">
                  Освоение профессиональных дисциплин, участие в практических проектах, 
                  работа с современными технологиями BIM
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Icon name="Wrench" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Этап 2: Стажировка</h4>
                <p className="text-muted-foreground">
                  Применение полученных знаний на реальных строительных объектах, 
                  работа в команде профессионалов
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Icon name="Building2" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Этап 3: Специалист</h4>
                <p className="text-muted-foreground">
                  Начало карьеры в качестве техника-строителя, участие в проектировании 
                  и надзоре за строительством
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Этап 4: Профессиональный рост</h4>
                <p className="text-muted-foreground">
                  Повышение квалификации, получение высшего образования, 
                  развитие до инженера-проектировщика
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <Button onClick={() => onNavigate('education')}>
              Далее: Образование
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const EducationPage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  const disciplines = [
    'Инженерная графика',
    'Техническая механика',
    'Основы электротехники',
    'Основы геодезии',
    'Информационные технологии в профессиональной деятельности',
    'Экономика организации',
    'Проектирование зданий и сооружений',
    'Проект производства работ',
    'Организация технологических процессов',
    'Учет и контроль технологических процессов',
    'Эксплуатация и реконструкция зданий',
    'Технологии информационного моделирования BIM',
  ];

  return (
    <div className="container mx-auto px-4 py-12 pb-24 md:pb-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Образование</h2>
        
        <Card className="p-8 mb-6">
          <div className="flex items-center mb-6">
            <Icon name="GraduationCap" size={32} className="text-primary mr-4" />
            <div>
              <h3 className="text-2xl font-semibold">Специальность СПО</h3>
              <p className="text-lg text-primary font-medium">
                08.02.01 Строительство и эксплуатация зданий и сооружений
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Срок обучения (очная форма)</p>
              <p className="font-medium">На базе основного общего: 3 года 6 месяцев</p>
              <p className="font-medium">На базе среднего общего: 2 года 6 месяцев</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Форма обучения</p>
              <p className="font-medium">Очная, заочная</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Ключевые профессиональные дисциплины</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {disciplines.map((discipline, index) => (
              <div key={index} className="flex items-start">
                <Icon name="CheckCircle2" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-foreground/90">{discipline}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-primary/5 border-primary/20">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Icon name="Award" size={28} className="text-primary mr-3" />
            Программа «Профессионалитет»
          </h3>
          <p className="text-foreground/80 mb-4">
            Студенты специальности 08.02.01 «Строительство и эксплуатация зданий и сооружений» 
            проходят обучение по ФП «Профессионалитет», что дает ряд преимуществ:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Icon name="Lightbulb" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span>Обучение в современных лабораториях и мастерских с новейшим оборудованием</span>
            </li>
            <li className="flex items-start">
              <Icon name="Users" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span>Непосредственное участие в процессе обучения практикующих специалистов с производства</span>
            </li>
            <li className="flex items-start">
              <Icon name="BriefcaseBusiness" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span>Гарантированное трудоустройство выпускников при наличии положительных рекомендаций</span>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-foreground/90">
              <strong>Выпускники специальности</strong> выполняют работы по проектированию, организации 
              и проведению строительных работ, эксплуатации, ремонту и реконструкции жилых, 
              общественных и промышленных зданий и сооружений.
            </p>
          </div>
        </Card>

        <div className="mt-8 flex justify-end">
          <Button onClick={() => onNavigate('resume')} size="lg">
            Далее: Резюме
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ResumePage = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
  return (
    <div className="container mx-auto px-4 py-12 pb-24 md:pb-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Резюме</h2>
        
        <Card className="p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold">Маняпов Артём</h3>
              <p className="text-xl text-primary font-medium mt-2">Студент-строитель</p>
            </div>
            <div className="hidden md:block">
              <Icon name="UserCircle" size={64} className="text-primary/20" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                Контактная информация
              </h4>
              <div className="space-y-2 text-foreground/80">
                <p>Город: Челябинск</p>
                <p>Образовательная организация: ГБПОУ "ЮУГК"</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                Период обучения
              </h4>
              <div className="space-y-2 text-foreground/80">
                <p>Начало: 2024</p>
                <p>Окончание: 2028</p>
                <p>Текущий курс: 1 курс</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6 mb-6">
            <h4 className="font-semibold mb-4 flex items-center text-lg">
              <Icon name="Target" size={22} className="mr-2 text-primary" />
              Профессиональные цели
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              Получение качественного профессионального образования в области строительства 
              и эксплуатации зданий и сооружений. Стремление к освоению современных технологий 
              информационного моделирования (BIM) и применению полученных знаний на практике.
            </p>
          </div>

          <div className="border-t pt-6 mb-6">
            <h4 className="font-semibold mb-4 flex items-center text-lg">
              <Icon name="BookOpen" size={22} className="mr-2 text-primary" />
              Ключевые компетенции в процессе освоения
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Инженерная графика',
                'Техническая механика',
                'Проектирование зданий',
                'Технологии BIM',
                'Организация процессов',
                'Геодезия',
              ].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-foreground/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="font-semibold mb-4 flex items-center text-lg">
              <Icon name="Sparkles" size={22} className="mr-2 text-primary" />
              Личные качества
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Ответственность',
                'Обучаемость',
                'Целеустремленность',
                'Внимательность',
                'Командная работа',
                'Аналитическое мышление',
              ].map((quality, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>
        </Card>

        <div className="flex justify-end">
          <Button onClick={() => onNavigate('achievements')} size="lg">
            Далее: Достижения
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const AchievementsPage = () => {
  const achievements = [
    {
      title: 'Сертификат «Урок Цифры»',
      description: 'За участие в уроке по теме «Видеоплатформа» всероссийской образовательной акции «Урок Цифры». Закаленный профессионал.',
      image: 'https://cdn.poehali.dev/files/достижение.png',
    },
    {
      title: 'Свидетельство об окончании курса',
      description: 'Поздравляем! Вы достойны свидетельства по окончании курса социально-гуманитарной направленности «Школа волонтеров» (базовый и профильный).',
      image: 'https://cdn.poehali.dev/files/достижение 2.png',
    },
    {
      title: 'Сертификат «Образование XXI века»',
      description: 'Маняпов Артём Артурович прошёл обучение по дополнительной образовательной программе химико-биологического профиля в Санкт-Петербурге, март 2022.',
      image: 'https://cdn.poehali.dev/files/достижение 3.jpg',
    },
    {
      title: 'Сертификат дополнительного обучения',
      description: 'Участие в образовательных программах и проектах для профессионального развития.',
      image: 'https://cdn.poehali.dev/files/достидение 4.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pb-24 md:pb-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Icon name="Trophy" size={40} className="text-primary mr-4" />
          <h2 className="text-4xl font-bold">Достижения</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-0 overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-64 object-contain bg-muted/20"
              />
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center">
            <Icon name="Rocket" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Продолжаем развиваться!</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый день — это новая возможность для достижений. Впереди еще много интересных 
              проектов, конкурсов и профессионального роста.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;