import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  TextField,
  ShimmeredDetailsList,
  DetailsListLayoutMode,
  Fabric,
  CheckboxVisibility,
  Dropdown,
  IDropdownOption,
  IColumn,
  DefaultButton,
} from "@fluentui/react";
import styled from "styled-components";

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const stateCodes: string[] = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const reportTypes: string[] = [
  "Assault",
  "Bias",
  "CP",
  "DUI",
  "DV",
  "Discrimination",
  "Drugs",
  "EF",
  "EF F",
  "EF M",
  "EF P",
  "Rehire",
  "Unspecified",
];

const makeDateList = (start: number, end: number): IDropdownOption[] => {
  var list: IDropdownOption[] = [{ key: 0, text: "" }];
  if (end > start) {
    for (var i = start; i <= end; i++) {
      const newOption: IDropdownOption = { key: i, text: i.toString() };
      list.push(newOption);
    }
  } else {
    for (var i = start; i >= end; i--) {
      const newOption: IDropdownOption = { key: i, text: i.toString() };
      list.push(newOption);
    }
  }
  return list;
};

const makeOtherList = (codes: string[]): IDropdownOption[] => {
  var list: IDropdownOption[] = [{ key: 0, text: "" }];
  codes.forEach((code: string, i: number) => {
    const newOption: IDropdownOption = { key: i, text: code };
    list.push(newOption);
  });

  return list;
};

type DataProps = {
  data: IReport[];
  _onRenderRow: any;
  description?:  string
};

export interface IReport {
  id: string;
  year: number;
  month: number;
  city: string;
  agency: string;
  state: string;
  type: string;
  status: string;
  officers_accused: number;
  victims: number;
  fatalities: number;
  race: string;
  minors: number;
  leadership: boolean;
  cost: number;
  description: string;
  source: string[];
}

const _copyAndSort = <T extends unknown>(
  items: T[],
  columnKey: string,
  isSortedDescending?: boolean
): T[] => {
  const key = columnKey as keyof T;

  if (columnKey != "month" && columnKey != "year") {
    return items
      .slice(0)
      .sort((a: T, b: T) =>
        (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1
      );
  } else {
    return items
      .slice(0)
      .sort((a: T, b: T) =>
        (
          isSortedDescending
            ? Number(a[key]) < Number(b[key])
            : Number(a[key]) > Number(b[key])
        )
          ? 1
          : -1
      );
  }
};

function DataFabric({ data, _onRenderRow, description }: DataProps) {
  const [reportData, setReportData] = useState<IReport[]>(data);
  const [updated, setUpdated] = useState<boolean>(false);
  const [descFilter, setDescFilter] = useState<string>("");
  const [monthFilter, setMonthFilter] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<string>("");
  const [cityFilter, setCityFilter] = useState<string>("");
  const [stateFilter, setStateFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [sortedColumn, setSortedColumn] = useState<IColumn>();
  const reportDataCopy = useRef<any>();

  useEffect(() => {
    reportDataCopy.current = data;
    if (description && !updated) {
        setDescFilter(description);
    }

    updateData();
    sortColumns(reportData, sortedColumn);
  }, [
    data,
    updated,
    descFilter,
    monthFilter,
    yearFilter,
    cityFilter,
    stateFilter,
    typeFilter,
    sortedColumn,
  ]);

  const _onColumnClick = (
    ev: React.MouseEvent<HTMLElement>,
    column: IColumn
  ): void => {
    setSortedColumn(column);
  };

  const sortColumns = (data: IReport[], column?: IColumn) => {
    if (column) {
      const newColumns: IColumn[] = columns.slice();
      const currColumn: IColumn = newColumns.filter(
        (currCol) => column.key === currCol.key
      )[0];
      newColumns.forEach((newCol: IColumn) => {
        if (newCol === currColumn) {
          currColumn.isSortedDescending = !currColumn.isSortedDescending;
          currColumn.isSorted = true;
        } else {
          newCol.isSorted = false;
          newCol.isSortedDescending = true;
        }
      });
      const newItems: IReport[] = _copyAndSort(
        reportDataCopy.current && !updated
          ? reportDataCopy.current
          : reportData,
        currColumn.fieldName!,
        currColumn.isSortedDescending
      );
      setReportData(newItems);
      setColumns(newColumns);
      setUpdated(true);
    }
  };

  const initialColumns: IColumn[] = [
    {
      key: "column1",
      name: "Description",
      fieldName: "description",
      minWidth: 275,
      maxWidth: 1000,
      isResizable: true,
      onColumnClick: _onColumnClick,
    },
    {
      key: "column2",
      name: "Month",
      fieldName: "month",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
      onColumnClick: _onColumnClick,
    },
    {
      key: "column3",
      name: "Year",
      fieldName: "year",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
      onColumnClick: _onColumnClick,
    },
    {
      key: "column4",
      name: "City",
      fieldName: "city",
      minWidth: 125,
      maxWidth: 150,
      isResizable: true,
      onColumnClick: _onColumnClick,
    },
    {
      key: "column5",
      name: "State",
      fieldName: "state",
      minWidth: 50,
      maxWidth: 50,
      isResizable: true,
      onColumnClick: _onColumnClick,
    },
    {
      key: "column6",
      name: "Type",
      fieldName: "type",
      minWidth: 100,
      maxWidth: 100,
      isResizable: true,
      onColumnClick: _onColumnClick,
    },
  ];

  const [columns, setColumns] = useState<IColumn[]>(initialColumns);

  const updateData = () => {
    const filteredReportData = reportDataCopy.current.filter((item: any) => {
      return (
        item.description.toLowerCase().indexOf(descFilter) > -1 &&
        (item.month === monthFilter || monthFilter === "") &&
        (item.year === yearFilter || yearFilter === "") &&
        item.city.toLowerCase().indexOf(cityFilter) > -1 &&
        (item.state === stateFilter || stateFilter === "") &&
        (item.type === typeFilter || typeFilter === "")
      );
    });
    setReportData(filteredReportData);

    // Definitely not the best way to go about this but it works for now
    if (filteredReportData.length !== reportData.length) {
      setUpdated(true);
      setSortedColumn(undefined);
    }
    setColumns(initialColumns);
  };

  const updateDescFilter = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    text?: string
  ) => {
    setDescFilter(text ? text.toLowerCase() : "");
  };

  const updateMonthFilter = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption | undefined,
    index?: number | undefined
  ) => {
    if (option) {
      setMonthFilter(option.text);
    }
  };

  const updateYearFilter = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption | undefined,
    index?: number | undefined
  ) => {
    if (option) {
      setYearFilter(option.text);
    }
  };

  const updateCityFilter = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    text?: string
  ) => {
    setCityFilter(text ? text.toLowerCase() : "");
  };

  const updateStateFilter = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption | undefined,
    index?: number | undefined
  ) => {
    if (option) {
      setStateFilter(option.text);
    }
  };

  const updateTypeFilter = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption | undefined,
    index?: number | undefined
  ) => {
    if (option) {
      setTypeFilter(option.text);
    }
  };

  const clearFilters = () => {
    setDescFilter("");
    setMonthFilter("");
    setYearFilter("");
    setCityFilter("");
    setStateFilter("");
    setTypeFilter("");
  };

  return (
    <Fabric>
      <Filters>
        <div style={{ display: "flex" }}>
          <TextField
            label="Description"
            onChange={updateDescFilter}
            styles={{ root: { marginRight: "10px" } }}
            value={descFilter}
          />
          <Dropdown
            label="Month"
            options={makeDateList(1, 12)}
            styles={{ dropdown: { width: 55 }, root: { marginRight: "10px" } }}
            onChange={updateMonthFilter}
            selectedKey={monthFilter && Number(monthFilter)}
          />
          <Dropdown
            label="Year"
            options={makeDateList(2020, 1950)}
            styles={{ dropdown: { width: 100 }, root: { marginRight: "10px" } }}
            onChange={updateYearFilter}
            selectedKey={yearFilter && Number(yearFilter)}
          />
          <TextField
            label="City"
            onChange={updateCityFilter}
            styles={{ root: { marginRight: "10px" } }}
            value={cityFilter}
          />
          <Dropdown
            label="State"
            options={makeOtherList(stateCodes)}
            styles={{ dropdown: { width: 100 }, root: { marginRight: "10px" } }}
            onChange={updateStateFilter}
            selectedKey={stateCodes.indexOf(stateFilter)}
          />
          <Dropdown
            label="Type"
            options={makeOtherList(reportTypes)}
            styles={{ dropdown: { width: 100 }, root: { marginRight: "10px" } }}
            onChange={updateTypeFilter}
            selectedKey={reportTypes.indexOf(typeFilter)}
          />
        </div>
        <DefaultButton text="Clear all filters" onClick={clearFilters} />
      </Filters>
      <ShimmeredDetailsList
        items={
          reportDataCopy.current && !updated
            ? reportDataCopy.current
            : reportData
        }
        columns={columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.justified}
        onRenderRow={_onRenderRow}
        checkboxVisibility={CheckboxVisibility.hidden}
      />
    </Fabric>
  );
}

export default DataFabric;
