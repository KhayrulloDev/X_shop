import Link from "next/link"
import { ChevronLeft, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewProductPage() {
  const categories = [
    "Smartfonlar",
    "Noutbuklar", 
    "Televizorlar",
    "Kiyim",
    "Quloqchinlar",
    "Soatlar",
    "Kosmetika",
    "O'yinlar"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/seller/dashboard" className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Yangi Mahsulot Qo'shish</h1>
              <p className="text-gray-600">Mahsulot ma'lumotlarini to'ldiring</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <form className="space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Asosiy Ma'lumotlar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Mahsulot Nomi *</Label>
                    <Input id="name" placeholder="Masalan: iPhone 15 Pro Max" />
                  </div>
                  <div>
                    <Label htmlFor="category">Kategoriya *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Kategoriyani tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Tavsif *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Mahsulot haqida batafsil ma'lumot yozing..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Narx (so'm) *</Label>
                    <Input id="price" type="number" placeholder="0" />
                  </div>
                  <div>
                    <Label htmlFor="stock">Miqdor *</Label>
                    <Input id="stock" type="number" placeholder="0" />
                  </div>
                  <div>
                    <Label htmlFor="condition">Holati</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Holatni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Yangi</SelectItem>
                        <SelectItem value="used">Ishlatilgan</SelectItem>
                        <SelectItem value="refurbished">Ta'mirlangan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Images */}
            <Card>
              <CardHeader>
                <CardTitle>Rasmlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-rose-400 transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Rasmlarni yuklash uchun bosing yoki shu yerga tashlang</p>
                  <p className="text-sm text-gray-500">PNG, JPG, JPEG (maksimal 5MB)</p>
                  <Button variant="outline" className="mt-4">
                    Rasm Tanlash
                  </Button>
                </div>
                
                {/* Preview uploaded images */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="relative aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Rasm 1</span>
                  </div>
                  <div className="relative aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Rasm 2</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Details */}
            <Card>
              <CardHeader>
                <CardTitle>Qo'shimcha Ma'lumotlar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="brand">Brend</Label>
                    <Input id="brand" placeholder="Masalan: Apple, Samsung" />
                  </div>
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" placeholder="Masalan: iPhone 15 Pro Max" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="color">Rang</Label>
                    <Input id="color" placeholder="Masalan: Qora, Oq, Ko'k" />
                  </div>
                  <div>
                    <Label htmlFor="warranty">Kafolat (oy)</Label>
                    <Input id="warranty" type="number" placeholder="12" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tags">Teglar</Label>
                  <Input id="tags" placeholder="Vergul bilan ajrating: smartfon, apple, yangi" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">smartfon</Badge>
                    <Badge variant="secondary">apple</Badge>
                    <Badge variant="secondary">yangi</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping */}
            <Card>
              <CardHeader>
                <CardTitle>Yetkazib Berish</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="weight">Og'irligi (kg)</Label>
                    <Input id="weight" type="number" step="0.1" placeholder="0.5" />
                  </div>
                  <div>
                    <Label htmlFor="length">Uzunlik (sm)</Label>
                    <Input id="length" type="number" placeholder="20" />
                  </div>
                  <div>
                    <Label htmlFor="width">Eni (sm)</Label>
                    <Input id="width" type="number" placeholder="15" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="height">Balandlik (sm)</Label>
                    <Input id="height" type="number" placeholder="5" />
                  </div>
                  <div>
                    <Label htmlFor="shipping_cost">Yetkazib berish narxi (so'm)</Label>
                    <Input id="shipping_cost" type="number" placeholder="15000" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button variant="outline" asChild>
                <Link href="/seller/dashboard">Bekor qilish</Link>
              </Button>
              <Button variant="outline">Qoralama sifatida saqlash</Button>
              <Button className="bg-rose-600 hover:bg-rose-700">
                Mahsulotni e'lon qilish
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}