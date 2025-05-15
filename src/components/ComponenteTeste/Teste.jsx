const Teste = () => {
  return (
    <section style={{ padding: "2rem 0" }}>
      <h2 style={{ color: "#ccd6f6", fontSize: "2rem", marginBottom: "2rem" }}>Experiências Recentes</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} style={{
            backgroundColor: "#112240",
            padding: "1.5rem",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            color: "#8892b0"
          }}>
            <h3 style={{ color: "#ccd6f6" }}>Projeto {index + 1}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teste;
