import { ReactNode } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

const SortableList = ({
  ids,
  children,
  onChange,
}: {
  ids: string[];
  children: ReactNode;
  onChange: (oldIndex: number, newIndex: number) => void;
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) =>
    over !== null &&
    active.id !== over.id &&
    onChange(ids.indexOf(active.id), ids.indexOf(over.id));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={ids}>{children}</SortableContext>
    </DndContext>
  );
};

export default SortableList;
