import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAddTodosMutation } from "../../redux/api/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AddTodoModal = (): JSX.Element => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [addTodo, { data, isLoading, isSuccess, isError }] =
    useAddTodosMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2);

    const taskDetails = {
      id,
      title: task,
      description,
      isCompleted: false,
      priority,
    };
    addTodo(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              task
            </Label>
            <Input
              onBlur={(e) => setTask(e.target.value)}
              id="task"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          {/* Description */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>

          {/* Priority */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Priority" className="text-right">
              Priority
            </Label>

            <Select onValueChange={(value) => setPriority(value)}>
              <SelectTrigger className="w-full col-span-3">
                <SelectValue placeholder="priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">high</SelectItem>
                <SelectItem value="medium">medium</SelectItem>
                <SelectItem value="low">low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="flex justify-end">
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;

// Pririty select
/*const SelectPriority = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="high">high</SelectItem>
        <SelectItem value="medium">medium</SelectItem>
        <SelectItem value="low">low</SelectItem>
      </SelectContent>
    </Select>
  );
};
*/
