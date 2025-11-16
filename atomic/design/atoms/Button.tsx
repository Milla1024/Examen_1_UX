"use client";

type Props = {
  label?: string;
  children?: React.ReactNode;
};

export default function Button({ label, children }: Props) {
  return (
    <button
      style={{
        background: "transparent",
        border: "none",
        color: "#fff",
        fontSize: "14px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      {children ? children : label}
    </button>
  );
}