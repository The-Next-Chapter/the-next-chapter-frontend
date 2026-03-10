function Card({ children }) {
  return (
    <div className="bg-[#E6D6C3] p-6 rounded-lg shadow-sm hover:shadow-md transition">
      {children}
    </div>
  )
}

export default Card