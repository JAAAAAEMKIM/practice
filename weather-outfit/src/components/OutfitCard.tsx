import { OutfitRecommendation } from '../services/outfitService';

interface OutfitCardProps {
  outfit: OutfitRecommendation;
}

export function OutfitCard({ outfit }: OutfitCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl">{outfit.emoji}</div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{outfit.style}</h3>
          <p className="text-gray-600 text-sm">{outfit.advice}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Clothing
          </h4>
          <div className="flex flex-wrap gap-2">
            {outfit.items.map((item, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Accessories
          </h4>
          <div className="flex flex-wrap gap-2">
            {outfit.accessories.map((accessory, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium"
              >
                {accessory}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
