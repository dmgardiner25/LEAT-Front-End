import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text, DetailsRow, IDetailsListProps } from "@fluentui/react";
import DataModal from "./DataModal";
import DataFabric, { IReport } from "./DataFabric";
import Nav from "./Nav";

const Wrapper = styled.div`
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

type props = {
  match: any;
};

function Data({ match }: props) {
  const [reportData, setReportData] = useState<IReport[]>([]);
  const [isDataSet, setIsDataSet] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [selectedReport, setSelectedReport] = useState<IReport[]>([]);

  useEffect(() => {
    if (match.params.desc) {
      setDescription(match.params.desc);
    }

    if (!isDataSet) {
      getReportData();
      setIsDataSet(true);
    }
  }, [reportData, isDataSet]);

  // Fetch data from psql database
  const getReportData = () => {
    fetch("http://localhost:3001/data")
      .then((response) => {
        return response.text();
      })
      .then((reportData) => {
        setReportData(JSON.parse(reportData).rows);

      });
  };

  // Close the data modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedReport([]);
  };

  const _onRenderRow: IDetailsListProps["onRenderRow"] = (props) => {
    if (props) {
      return (
        <div onClick={() => {
          setShowModal(true)
          setSelectedReport(reportData.filter((report) => {
            return report.id === props.item.id;
          }))
        }}>
          <DetailsRow {...props} />
        </div>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      <Nav inData={true} />
      <Top>
        <Text variant={"xxLargePlus"}>Data</Text>
        <Text variant={"large"} style={{ marginBottom: "20px" }}>
          This is the raw data that we use for the entirety of our project,
          gathered using a web scraper. Feel free to look through it for
          yourself.
        </Text>
        <Text variant={"medium"}>
          Click on an entry to learn more information about it.
        </Text>
      </Top>
      <DataFabric
        data={reportData}
        description={description}
        _onRenderRow={_onRenderRow}
      />
      <DataModal selectedReport={selectedReport} visible={showModal} closeModal={closeModal} />
    </Wrapper>
  );
}

export default Data;
