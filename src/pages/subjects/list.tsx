import { CreateButton } from "@/components/refine-ui/buttons/create";
import { ShowButton } from "@/components/refine-ui/buttons/show";
import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTMENT_OPTIONS } from "@/constants";
import { Subject } from "@/types";
import { useTable } from "@refinedev/react-table";
import { ColumnDef } from "@tanstack/react-table";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const SubjectList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  //  Department Filters
  const departmentFilters =
    selectedDepartment === "all"
      ? []
      : [
          {
            field: "department",
            operator: "eq" as const,
            value: selectedDepartment,
          },
        ];
  //  Search Filters
  const searchFilters = searchQuery
    ? [{ field: "name", operator: "eq" as const, value: searchQuery }]
    : [];

  // Columns Definition
  const columns = useMemo<ColumnDef<Subject>[]>(
    () => [
      {
        id: "code",
        accessorKey: "code",
        size: 140,
        header: () => <p className="column-title ml-2">Code</p>,
        cell: ({ getValue }) => (
          <Badge className="w-[110px] justify-center bg-red-600 text-white hover:bg-red-600 rounded-full md:text-sm">
            {getValue<string>()}
          </Badge>
        ),
      },
      {
        id: "name",
        accessorKey: "name",
        size: 200,
        header: () => <p className="column-title">Name</p>,
        cell: ({ getValue }) => (
          <span className="text-foreground">{getValue<string>()}</span>
        ),
        filterFn: "includesString",
      },
      {
        id: "department",
        accessorKey: "department",
        size: 180,
        header: () => <p className="column-title">Department</p>,
        cell: ({ getValue }) => (
          <Badge className="w-[160px] justify-center bg-green-600 text-white hover:bg-green-600 rounded-full md:text-sm">
            {getValue<string>()}
          </Badge>
        ),
      },
      {
        id: "description",
        accessorKey: "description",
        size: 300,
        header: () => <p className="column-title">Description</p>,
        cell: ({ getValue }) => (
          <span className="truncate line-clamp-2">{getValue<string>()}</span>
        ),
      },
      {
        id: "details",
        size: 140,
        header: () => <p className="column-title">Details</p>,
        cell: ({ row }) => (
          <ShowButton
            resource="subjects"
            recordItemId={row.original.id}
            variant="outline"
            size="sm"
          >
            View
          </ShowButton>
        ),
      },
    ],
    [],
  );
  // Subject Table Definition
  const subjectTable = useTable<Subject>({
    columns,
    refineCoreProps: {
      resource: "subjects",
      pagination: {
        pageSize: 10,
        mode: "server",
      },
      filters: {
        permanent: [...departmentFilters, ...searchFilters],
      },
      sorters: {
        initial: [{ field: "id", order: "desc" }],
      },
    },
  });

  return (
    <ListView>
      <Breadcrumb />
      <h1 className="page-title">Subjects</h1>
      <div className="intro-row">
        <p>Quick Access to essential metrics and management tools</p>
        <div className="actions-row">
          <div className="search-field">
            <Search className="search-icon" />
            <Input
              type="text"
              placeholder="Search  by name ..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {DEPARTMENT_OPTIONS.map((department) => (
                  <SelectItem value={department.value} key={department.value}>
                    {department.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <CreateButton />
          </div>
        </div>
      </div>

      <DataTable table={subjectTable} />
    </ListView>
  );
};

export default SubjectList;
