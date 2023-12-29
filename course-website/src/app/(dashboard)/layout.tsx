import SideBar from "./_components/SideBar"
export default function DashBoardlayout({
    children
}:{children:React.ReactNode}) {
  return (
    <div className="h-full">
      <div className ="hidden md:flex h-full w-56 flex-col fixed instet-y-0 z-50">
        <SideBar/>
      </div>
      {children}
    </div>
  )
}
