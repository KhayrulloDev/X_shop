import Link from "next/link"
import Image from "next/image"
import { 
  Package, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Plus, 
  Eye, 
  Edit, 
  Trash2,
  BarChart3,
  ShoppingBag,
  Star,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function SellerDashboard() {
  const stats = {
    totalProducts: 24,
    totalSales: 1250000,
    monthlyOrders: 89,
    rating: 4.8,
    reviews: 156
  }

  const recentProducts = [
    {
      id: "1",
      name: "iPhone 15 Pro Max",
      price: 1299000,
      stock: 5,
      sold: 12,
      image: "/placeholder.svg?height=60&width=60",
      status: "active"
    },
    {
      id: "2", 
      name: "Samsung Galaxy S24",
      price: 899000,
      stock: 0,
      sold: 8,
      image: "/placeholder.svg?height=60&width=60",
      status: "out_of_stock"
    },
    {
      id: "3",
      name: "MacBook Air M3",
      price: 1599000,
      stock: 3,
      sold: 5,
      image: "/placeholder.svg?height=60&width=60",
      status: "active"
    }
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "Aziz Karimov",
      product: "iPhone 15 Pro Max",
      amount: 1299000,
      status: "pending",
      date: "2025-01-15"
    },
    {
      id: "ORD-002",
      customer: "Malika Tosheva",
      product: "Samsung Galaxy S24",
      amount: 899000,
      status: "shipped",
      date: "2025-01-14"
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Faol</Badge>
      case "out_of_stock":
        return <Badge className="bg-red-100 text-red-800">Tugagan</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Kutilmoqda</Badge>
      case "shipped":
        return <Badge className="bg-blue-100 text-blue-800">Yuborilgan</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sotuvchi Paneli</h1>
              <p className="text-gray-600">Biznesingizni boshqaring</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild className="bg-rose-600 hover:bg-rose-700">
                <Link href="/seller/products/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Yangi Mahsulot
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/seller/orders">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Buyurtmalar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Jami Mahsulotlar</p>
                  <p className="text-3xl font-bold">{stats.totalProducts}</p>
                </div>
                <Package className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Jami Sotuv</p>
                  <p className="text-2xl font-bold">{formatPrice(stats.totalSales)} so'm</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Oylik Buyurtmalar</p>
                  <p className="text-3xl font-bold">{stats.monthlyOrders}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Reyting</p>
                  <div className="flex items-center gap-1">
                    <p className="text-3xl font-bold">{stats.rating}</p>
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-sm text-orange-100">{stats.reviews} sharh</p>
                </div>
                <Users className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products and Orders */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="products">Mahsulotlarim</TabsTrigger>
                <TabsTrigger value="orders">So'nggi Buyurtmalar</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>So'nggi Mahsulotlar</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/seller/products">
                          Barchasini ko'rish
                        </Link>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentProducts.map((product) => (
                        <div key={product.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="w-12 h-12 relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{product.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>Narx: {formatPrice(product.price)} so'm</span>
                              <span>Qolgan: {product.stock}</span>
                              <span>Sotilgan: {product.sold}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {getStatusBadge(product.status)}
                            <div className="flex gap-1">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>So'nggi Buyurtmalar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium">{order.id}</h3>
                            <p className="text-sm text-gray-600">{order.customer}</p>
                            <p className="text-sm text-gray-600">{order.product}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{formatPrice(order.amount)} so'm</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                            {getStatusBadge(order.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Analytics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Statistika
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bugungi sotuv</span>
                    <span className="font-medium">125,000 so'm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Haftalik sotuv</span>
                    <span className="font-medium">890,000 so'm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Ko'rilgan mahsulotlar</span>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sevimlilar</span>
                    <span className="font-medium">89</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  So'nggi Sharhlar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm">"Ajoyib mahsulot, tez yetkazib berildi!"</p>
                    <p className="text-xs text-gray-500 mt-1">Aziz K.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-1 mb-1">
                      {[1,2,3,4].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-3 w-3 text-gray-300" />
                    </div>
                    <p className="text-sm">"Yaxshi, lekin qadoqlash yaxshiroq bo'lishi mumkin edi."</p>
                    <p className="text-xs text-gray-500 mt-1">Malika T.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}