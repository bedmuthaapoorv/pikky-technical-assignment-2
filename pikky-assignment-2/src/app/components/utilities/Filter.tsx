"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export default function Filter(props: any) {
  const [position, setPosition] = React.useState("bottom");
  let [value, setValue] = React.useState("");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{value == "" ? props.name : value}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        {props.options && props.options.length != 0 ? (
          <DropdownMenuRadioGroup value={position}>
            {props.options.map((option: string, key: number) => {
              return (
                <DropdownMenuRadioItem
                  key={key}
                  value={option}
                  onClick={(e) => {
                    props.setter(option);
                    setValue(option);
                  }}
                >
                  {option}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        ) : (
          <Input
            type="text"
            placeholder={props.name}
            onChange={(e) => {
              props.setter(e.target.value);
              setValue(e.target.value);
            }}
          />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
