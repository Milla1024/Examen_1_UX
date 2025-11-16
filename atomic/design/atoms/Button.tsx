interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: "500",
        padding: "8px 12px",
        borderRadius: "4px",
        transition: "all 0.2s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = "#b3b3b3";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = "#fff";
      }}
    >
      {label}
    </button>
  );
}