import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link to="/" className="text-primary-100 hover:text-white">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={item.path}>
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4 text-primary-100" />
            </li>
            <li>
              {index === items.length - 1 ? (
                <span className="text-white font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="text-primary-100 hover:text-white">
                  {item.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;