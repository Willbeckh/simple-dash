import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activity = [
  {
    name: "John Doe",
    email: "john@example.com",
    timestamp: "2 hours ago",
    action: "Purchased Premium Plan",
    amount: "$299.00",
  },
  {
    name: "Alice Smith",
    email: "alice@example.com",
    timestamp: "4 hours ago",
    action: "Upgraded Subscription",
    amount: "$199.00",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    timestamp: "6 hours ago",
    action: "New Registration",
    amount: "$0.00",
  },
];

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activity.map((item, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/0${index + 1}.png`} alt="Avatar" />
            <AvatarFallback>
              {item.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.action}</p>
          </div>
          <div className="ml-auto font-medium">
            <div className="text-sm">{item.amount}</div>
            <div className="text-xs text-muted-foreground">{item.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
}