import { FileText, DollarSign } from "lucide-react";

export default function LegalPricingLinks() {
  return (
    <div className="flex justify-end space-x-4 mb-8">
      <a 
        href="#" 
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
      >
        <FileText className="w-4 h-4 text-gray-600" />
        <span className="text-gray-600 hover:text-gray-900 font-medium">Legal</span>
      </a>
      <a 
        href="#" 
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
      >
        <DollarSign className="w-4 h-4 text-gray-600" />
        <span className="text-gray-600 hover:text-gray-900 font-medium">Pricing</span>
      </a>
    </div>
  );
}
