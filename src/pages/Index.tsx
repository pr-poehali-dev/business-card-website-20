import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      title: 'Премиум продукт',
      description: 'Инновационное решение для вашего бизнеса с расширенными возможностями',
      price: '50 000 ₽',
      icon: 'Sparkles'
    },
    {
      title: 'Стандарт',
      description: 'Оптимальное соотношение цены и качества для среднего бизнеса',
      price: '30 000 ₽',
      icon: 'Star'
    },
    {
      title: 'Базовый',
      description: 'Идеальное решение для старта с основными функциями',
      price: '15 000 ₽',
      icon: 'Zap'
    }
  ];

  const experience = [
    { number: '150+', label: 'Проектов' },
    { number: '8', label: 'Лет опыта' },
    { number: '95%', label: 'Довольных клиентов' },
    { number: '24/7', label: 'Поддержка' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Rocket" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                BRAND
              </span>
            </div>
            
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'products', 'experience', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'products' && 'Товары'}
                  {section === 'experience' && 'Опыт'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Инновации
              <br />
              Будущего
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаём передовые решения, которые меняют правила игры на рынке
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all transform hover:scale-105"
                onClick={() => scrollToSection('products')}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Наши товары
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-105"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О нас
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Мы команда профессионалов, которая создаёт уникальные продукты с использованием передовых технологий
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Target', title: 'Наша миссия', text: 'Делать бизнес наших клиентов эффективнее через инновационные решения' },
              { icon: 'Eye', title: 'Наше видение', text: 'Стать лидером рынка и задавать стандарты качества в индустрии' },
              { icon: 'Heart', title: 'Наши ценности', text: 'Честность, инновации и фокус на результат клиента' }
            ].map((item, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Наши товары
            </h2>
            <p className="text-muted-foreground text-lg">
              Выберите решение, которое подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-secondary transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-secondary/30 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Icon name={product.icon as any} size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-secondary transition-colors">{product.title}</h3>
                <p className="text-muted-foreground mb-6 min-h-[60px]">{product.description}</p>
                <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {product.price}
                </div>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-all">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Наш опыт
            </h2>
            <p className="text-muted-foreground text-lg">
              Цифры, которые говорят сами за себя
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {experience.map((item, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-card to-muted hover:from-primary/20 hover:to-secondary/20 transition-all duration-500 transform hover:scale-110"
              >
                <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {item.number}
                </div>
                <div className="text-muted-foreground text-lg font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Свяжитесь с нами
              </h2>
              <p className="text-muted-foreground text-lg">
                Готовы обсудить ваш проект? Напишите нам!
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-card border-border">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com" 
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67" 
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..." 
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all transform hover:scale-105"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: 'Mail', title: 'Email', text: 'hello@brand.com' },
                { icon: 'Phone', title: 'Телефон', text: '+7 (999) 123-45-67' },
                { icon: 'MapPin', title: 'Адрес', text: 'Москва, ул. Примерная, 1' }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-card hover:bg-muted transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Rocket" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                BRAND
              </span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              © 2024 BRAND. Все права защищены.
            </p>

            <div className="flex gap-4">
              {['Github', 'Twitter', 'Linkedin', 'Instagram'].map((social) => (
                <button 
                  key={social}
                  className="w-10 h-10 rounded-full bg-card hover:bg-primary transition-all flex items-center justify-center group"
                >
                  <Icon name={social as any} size={20} className="text-muted-foreground group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
