import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "success" | "warning";
}

export const NotificationBell = () => {
  // Mock notifications - in production, this would come from the database
  const notifications: Notification[] = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our latest course on Advanced React Patterns",
      time: "5 minutes ago",
      read: false,
      type: "info"
    },
    {
      id: 2,
      title: "Certificate Ready",
      message: "Your certificate for Digital Marketing is ready to download",
      time: "2 hours ago",
      read: false,
      type: "success"
    },
    {
      id: 3,
      title: "Upcoming Session",
      message: "Your mentorship session starts in 1 hour",
      time: "3 hours ago",
      read: true,
      type: "warning"
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
      case "warning":
        return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800";
      default:
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800";
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs"
              aria-label={`${unreadCount} unread notifications`}
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 dark:bg-gray-800 dark:border-gray-700" align="end">
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold dark:text-white">Notifications</h3>
            {unreadCount > 0 && (
              <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-200">
                {unreadCount} new
              </Badge>
            )}
          </div>
        </div>
        <ScrollArea className="h-80">
          {notifications.length > 0 ? (
            <div className="p-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 mb-2 rounded-lg border cursor-pointer hover:shadow-sm transition-all ${getNotificationColor(notification.type)} ${
                    !notification.read ? "font-medium" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Notification: ${notification.title}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold mb-1 dark:text-white">
                        {notification.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                        {notification.message}
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {notification.time}
                      </span>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-1 ml-2" aria-label="Unread" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <Bell className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No notifications yet</p>
            </div>
          )}
        </ScrollArea>
        <div className="p-3 border-t dark:border-gray-700">
          <Button 
            variant="ghost" 
            className="w-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            aria-label="View all notifications"
          >
            View All Notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
