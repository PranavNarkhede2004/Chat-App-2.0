const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center bg-base-200 p-8">
      <div className="max-w-md text-center">
        {/* Responsive Grid: 2 cols on small, 3 cols on medium+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60 text-sm md:text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
