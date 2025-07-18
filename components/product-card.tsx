import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  name: string
  image: string
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  badge?: string
  discount?: string
  className?: string
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  oldPrice,
  rating,
  reviews,
  badge,
  discount,
  className,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price)
  }

  return (
    <div
      className={cn(
        "group relative border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white h-full flex flex-col transform hover:scale-[1.02]",
        className,
      )}
    >
      <div className="absolute top-2 right-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {badge && (
        <div className="absolute top-2 left-2 z-10">
          <Badge className="bg-rose-600 text-white text-xs px-2 py-1">{badge}</Badge>
        </div>
      )}

      {discount && (
        <div className="absolute top-10 left-2 z-10">
          <Badge variant="outline" className="bg-black text-white text-xs px-2 py-1 border-none">
            {discount}
          </Badge>
        </div>
      )}

      <Link href={`/product/${id}`} className="flex flex-col flex-grow">
        <div className="aspect-square relative bg-gray-50">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-contain p-1 transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={id === "1"}
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-3 flex flex-col flex-grow">
          <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem] group-hover:text-rose-600 transition-colors">
            {name}
          </h3>

          <div className="flex items-center mt-1 text-xs">
            <div className="flex items-center text-amber-500">
              <Star className="h-3 w-3 fill-current" />
              <span className="ml-1">{rating}</span>
            </div>
            <span className="text-gray-500 ml-1">({reviews} sharhlari)</span>
          </div>

          <div className="mt-auto pt-2">
            <div className="font-bold text-sm">{formatPrice(price)} so&apos;m/oyiga</div>
            {oldPrice && <div className="text-gray-500 text-xs line-through">{formatPrice(oldPrice)}</div>}
          </div>
        </div>
      </Link>

      <div className="absolute bottom-1 right-2">
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7 rounded-full bg-white/80 backdrop-blur-sm hover:bg-rose-50 hover:text-rose-600 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Add to cart"
        >
          <ShoppingCart className="h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}
