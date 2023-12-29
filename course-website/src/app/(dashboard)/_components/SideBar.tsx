import {Logo} from "./Logo"
export default function SideBar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm z-50">
      <div className="p-6 z-50">
      <Logo/>
      </div>      
    </div>
  )
}
