const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Data Sources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• OnePlus Official Specifications</li>
              <li>• Apple iPad Technical Specifications</li>
              <li>• Geekbench CPU Benchmark Database</li>
              <li>• GSMArena Device Comparisons</li>
              <li>• Independent Battery Life Tests</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Methodology</h3>
            <p className="text-sm text-muted-foreground">
              All comparisons use publicly available specifications and benchmark data. 
              Performance projections are based on historical SoC aging patterns and app requirement trends. 
              Value calculations normalize features by price to provide objective cost-benefit analysis.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Last updated: {currentDate}</p>
          <p className="mt-2">Compiled by JS Abhishek, Computer Science Engineering Student</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
