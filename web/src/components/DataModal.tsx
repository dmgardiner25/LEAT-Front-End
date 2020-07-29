import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Modal,
  IconButton,
  IIconProps,
  getTheme,
  Text,
  ShimmeredDetailsList,
  DetailsListLayoutMode,
  CheckboxVisibility,
  IColumn,
} from "@fluentui/react";
import { IReport } from "./DataFabric";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% 2%;
`;

const Exit = styled.div`
  align-self: flex-end;
  margin-top: -2%;
  margin-right: -2%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnName = styled.div`
  width: 100px;
`;

const theme = getTheme();

const cancelIcon: IIconProps = { iconName: "Cancel" };

const iconButtonStyles = {
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};

const columns: IColumn[] = [
  {
    key: "column1",
    name: "Field",
    fieldName: "field",
    minWidth: 100,
    maxWidth: 100,
    isResizable: false,
  },
  {
    key: "column2",
    name: "Value",
    fieldName: "value",
    minWidth: 50,
    maxWidth: 50,
    isResizable: false,
  },
];

type ModalProps = {
  selectedReport: IReport[];
  visible: boolean;
  closeModal: any;
};

function DataModal({ selectedReport, visible, closeModal }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const generateList = () => {
    if (selectedReport[0]) {
      return Object.entries(selectedReport[0])
        .filter((column) => {
          return column[0] !== "id" && column[0] != "description" && column[0] != "score";
        })
        .map((column, index) => {
          console.log(column[0])
          if (column[0] === 'source') {
            console.log('?')
            return { field: 'Source', value: <a href={column[1][0]} target="_blank">{column[1][0]}</a>}
          }
          return { field: column[0].charAt(0).toUpperCase() + column[0].slice(1), value: column[1] };
        });
    }
    return []
  };

  useEffect(() => {
    setIsModalOpen(visible);
    generateList();
    console.log(selectedReport);
  });

  if (selectedReport[0]) {
    return (
      <div>
        <Modal isOpen={isModalOpen} onDismiss={closeModal} isBlocking={false}>
          <Wrapper>
            <Exit>
              <IconButton
                styles={iconButtonStyles}
                iconProps={cancelIcon}
                onClick={closeModal}
              />
            </Exit>
            <Text variant={"xxLarge"}>{selectedReport[0].description}</Text>
            <ShimmeredDetailsList
              items={generateList()}
              columns={columns}
              setKey="set"
              layoutMode={DetailsListLayoutMode.justified}
              checkboxVisibility={CheckboxVisibility.hidden}
            />
          </Wrapper>
        </Modal>
      </div>
    );
  }
  return <div></div>;
}

export default DataModal;
