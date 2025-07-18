import Link from "next/link"
import { ChevronLeft, Store, Users, TrendingUp, Shield, Headphones, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BecomeSellerPage() {
  const benefits = [
    {
      icon: <Store className="h-8 w-8 text-rose-600" />,
      title: "O'z Do'koningiz",
      description: "Millionlab xaridorlarga mahsulotlaringizni ko'rsating"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Keng Auditoriya",
      description: "Butun O'zbekiston bo'ylab mijozlarga yeting"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Daromad Oshiring",
      description: "Onlayn savdo orqali daromadingizni ko'paytiring"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Xavfsiz To'lovlar",
      description: "Barcha to'lovlar himoyalangan va kafolatlangan"
    },
    {
      icon: <Headphones className="h-8 w-8 text-orange-600" />,
      title: "24/7 Qo'llab-quvvatlash",
      description: "Har doim yordam olish uchun bizning jamoamiz"
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-600" />,
      title: "Marketing Yordami",
      description: "Mahsulotlaringizni reklama qilishda yordam"
    }
  ]

  const steps = [
    {
      step: "1",
      title: "Ro'yxatdan o'ting",
      description: "Sotuvchi sifatida ro'yxatdan o'ting va ma'lumotlaringizni kiriting"
    },
    {
      step: "2", 
      title: "Hujjatlarni yuklang",
      description: "Biznes hujjatlaringizni yuklang va tasdiqlang"
    },
    {
      step: "3",
      title: "Do'koningizni sozlang",
      description: "Do'kon nomini, logotipni va tavsifni qo'shing"
    },
    {
      step: "4",
      title: "Mahsulot qo'shing",
      description: "Birinchi mahsulotlaringizni qo'shing va sotishni boshlang"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sotuvchi Bo'ling</h1>
              <p className="text-gray-600">O'z biznesingizni onlayn olib boring</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Millionlab Xaridorlarga 
              <span className="text-rose-600"> Yeting</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Market platformasida o'z do'koningizni oching va daromadingizni oshiring. 
              Biz sizga barcha kerakli vositalarni taqdim etamiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                Hozir Boshlash
              </Button>
              <Button size="lg" variant="outline">
                Batafsil Ma'lumot
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Nima Uchun Market?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Qanday Ishlaydi?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Sotuvchi Sifatida Ro'yxatdan O'ting</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Ism *</Label>
                    <Input id="firstName" placeholder="Ismingiz" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Familiya *</Label>
                    <Input id="lastName" placeholder="Familiyangiz" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input id="phone" placeholder="+998 90 123 45 67" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="storeName">Do'kon Nomi *</Label>
                  <Input id="storeName" placeholder="Sizning do'kon nomingiz" />
                </div>

                <div>
                  <Label htmlFor="storeDescription">Do'kon Tavsifi</Label>
                  <Textarea 
                    id="storeDescription" 
                    placeholder="Do'koningiz haqida qisqacha ma'lumot..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessType">Biznes Turi *</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Tanlang</option>
                      <option value="individual">Jismoniy shaxs</option>
                      <option value="business">Yuridik shaxs</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="category">Asosiy Kategoriya *</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Tanlang</option>
                      <option value="electronics">Elektronika</option>
                      <option value="fashion">Moda</option>
                      <option value="home">Uy-ro'zg'or</option>
                      <option value="books">Kitoblar</option>
                      <option value="sports">Sport</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Manzil *</Label>
                  <Textarea 
                    id="address" 
                    placeholder="To'liq manzilingizni kiriting..."
                    rows={2}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <Label htmlFor="terms" className="text-sm">
                    Men <Link href="/terms" className="text-rose-600 hover:underline">Foydalanish shartlari</Link> va 
                    <Link href="/privacy" className="text-rose-600 hover:underline"> Maxfiylik siyosati</Link>ga roziman
                  </Label>
                </div>

                <Button className="w-full bg-rose-600 hover:bg-rose-700" size="lg">
                  Ariza Yuborish
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Arizangiz ko'rib chiqilgandan so'ng, 24-48 soat ichida javob beramiz
                </p>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Stats */}
        <section className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Bizning Natijalar</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">10,000+</div>
              <div className="text-gray-600">Faol Sotuvchilar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Oylik Xaridorlar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50M+</div>
              <div className="text-gray-600">Oylik Sotuv</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600">Mijoz Mamnuniyati</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}