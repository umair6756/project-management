// components/Avatar.jsx
import React from "react";

export default function Avatar({ src, alt = "avatar" }) {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
