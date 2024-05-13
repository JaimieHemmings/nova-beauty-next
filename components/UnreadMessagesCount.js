'use client'
import { useGlobalContext } from "@/context/GlobalContext"

const UnreadMessagesCount = () => {
    const {unreadCount} = useGlobalContext()

  return unreadCount > 0 ? (
    <span>
        {unreadCount}
    </span>
  ) :  null;
}

export default UnreadMessagesCount
