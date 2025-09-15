import { FileText, DollarSign } from "lucide-react";

export default function LegalPricingLinks() {
  return (
    <div className="flex justify-end space-x-3 mb-6">
      <a 
        href="#" 
        className="flex items-center space-x-1.5 bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-md transition-colors"
      >
        <FileText className="w-3.5 h-3.5 text-gray-600" />
        <span className="text-gray-600 hover:text-gray-900 font-medium text-sm">Legal</span>
      </a>
      <a 
        href="#" 
        className="flex items-center space-x-1.5 bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-md transition-colors"
      >
        <DollarSign className="w-3.5 h-3.5 text-gray-600" />
        <span className="text-gray-600 hover:text-gray-900 font-medium text-sm">Pricing</span>
      </a>
    </div>
  );
}
