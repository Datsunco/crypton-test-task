import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ProfileData } from "@/types/auth";
import { Heart, Package, ShoppingCart, LogOut } from "lucide-react";

interface UserPopoverProps {
  profileData: ProfileData;
  onLogout: () => void;
}

const UserPopover: React.FC<UserPopoverProps> = ({ profileData, onLogout }) => (
  <div className="flex flex-col">
    <div className="px-4 pb-4">
      <div className="flex items-center justify-between">
        <p className="w-40 h-4 text-sm font-medium text-muted-foreground overflow-hidden">
          {profileData?.id}
        </p>
        <Avatar className="w-12 h-12 border-solid border-2">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-sm text-muted-foreground">{profileData.email}</p>
    </div>
    <div className="border-t">
      <div className="flex flex-col">
        <Button
          variant="ghost"
          className="flex justify-start gap-2 rounded-none px-4 py-2"
        >
          <Package className="h-4 w-4" />
          Заказы
        </Button>
        <Button
          variant="ghost"
          className="flex justify-start gap-2 rounded-none px-4 py-2"
        >
          <Heart className="h-4 w-4" />
          Избранное
        </Button>
        <Button
          variant="ghost"
          className="flex justify-start gap-2 rounded-none px-4 py-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Корзина
        </Button>
      </div>
    </div>
    <div className="border-t p-2">
      <Button
        variant="ghost"
        className="flex w-full justify-start gap-2 px-2 text-muted-foreground"
        onClick={onLogout}
      >
        <LogOut className="h-4 w-4" />
        Выйти
      </Button>
    </div>
  </div>
);

export default UserPopover;
