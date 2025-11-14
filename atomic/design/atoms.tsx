export default function Button({
  text,
  icon,
}: {
  text: string;
  icon?: string;
}) {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: "#fff",
        border: "none",
        color: "#000",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
    >
        Boton
    </button>
  );
}
