import React, {useState} from 'react';
import styled from 'styled-components';
import { Text } from '@fluentui/react';
import Nav from './Nav';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models, Report, Embed, service, IEmbedConfiguration } from 'powerbi-client';
import '@fluentui/react/dist/css/fabric.css';
import './Landing.css';

const Wrapper = styled.div`
    width: 100%;
`

function Landing() {
  // it is copied from https://microsoft.github.io/PowerBI-JavaScript/demo/v2-demo/index.html# 
	const sampleReportToken = 'H4sIAAAAAAAEAC2WxQ7sCA5F_-VtM1IqnIzUizAzZ5dUmJla8-9TavXGK4N8bR_57z9W-vRTmv_57x86sB7NwARMQXQ_r7vmokxKj3NUjb8Hyab7DH09sivUHBCnFk7rhz4rBDL8Qp9dSTLVwqwlo2IaTQZlTEfzglZ2sHfIdpbaeaqonJsaoWvSpdR0JquBKBmhZ7kxHfH8DUSOUS-A7WJU6pHWiAYeaKQ_eatiS0jNgjjjUDIFviQp25pC9sQeXz4JNjue2oxT8CR3iysV3cNnPU8M0TGXPUFMybDlAJV22e48Xcz14rsQvC1Y7BemC_fUXaiuLQrrT8A9VlzhDk5jindswzHoKWsbHAkxkX0ouYCm7S1C7ZvViBUWRGozt_07-760SSCnlZB8Br8u6A7QJAtlu2wYT5Kvi2W7xvKJ0VAnl3O1P6D74GqzHddJTfFVfgZwnWaFsm7BWGshGdIlEsBJrGgwL9-MalHVxBMBFkzjyHlCbTL7UiNyGN7vYJNzJpsyedEklhenbFWhi-JT5PeHY5rCTKeNjQGbVBpusirQMC9H7p3saimLRihW5gySOjgFwafUIGPMIjgtVfcZfY7efnah15mGiXWpjWX3rotpaHbFRxRx4cYiD6j5VJ9_hpgqrwvDA0yWObLo7klP250rvNL1ELYk6mRqE3_H2FfNtKGTSyQP5ZP3Nu-PEd3solxxFSkvyCd3yPxl8T0jvod5AQuLHfKIBk2PDWmQRcwFWYHMmOuX2SHuAiNvjftahBbqxBnHAT518CGfut4lyf4kQTPpEwZPa48G32gM83JUA1ylcyK3nyRCEkptNwYasHafQ_MMySGnA1DVHqUc7ksfr9fZnyn_xXoStUA3D3WswadAnJcafb4mPUKCfWuDW9s65k8dFcb0WiNNUjpHN-MWRmcQ_56WqTf9jKZxTjEYB12FPQhWfiVwrknCgXLE1x8bp6W7Wc9qqD-dAnzqXrfF_CZTdt0uFHiLunlrhF4y0C6rQVr7WH4-ylEl5i4EdKkqrx3hAwuSW4YJo8J2vh9giD8qWDV2EvOsjw9BJ73M5f2Qc7uv0z4Bvt936P6g3bPkvazH_fESikZxvBTgPdWB6Z34yj4Nvp6pxTVyKHQahXOVjcxGJ1ZNCvZ2QNbjtnH2TrfpwbGjIH_Rd77sIyLcOZeOgwwHPfzGrGDmuj28wIwlz0nMTVu-HkSNAEPVweypqLkEWE51C48u-IJnC4YxUvo6-WYt8nH4N2lgy-JWp5URrMc-wnYcIKwR16PqD-2BJya7xL0ITAJsZxmtooeGv0rPWny9-rjmsrC486Wcqm-ShQuBPMO6gtgvrDc2WhxBLjRLxIIuZWvFj7Ib8PGsM4etbyARl9s2qMR1wYGAqWPRjURWG-W5XpOtcvyIgoFeNb_XaCUytojc3Xsa0yjrCTpq6JlnIaUciLE3DJ0mYfkyI1kPskLmZ_oFmDhJCwYNdCqeuKtSwGDx1C3JaunDTZyHOrivKjQXGAPcZzfpKtmNFYYHsLwk1OqScMTI2N5ntEJH6UBxkdwv7L5GhsK5e8hx0LOsCwiVqWy1JW80h7ShCINizQ1Uw9s17qWZrDuUOW-VaPd7lRZhe0HHwwcXolGNc0w1V8YLT2mXD2XsJoy78KhAiE9T4klpw9W8Xq9T8OI8EemxQJSNdJJ6sX4XLzMHl7Gs1kvZpW-BlKlH-hL6Vg9DG-ZRJqICdNs5_J1uHjU_bSoURlV5yXKk7eTHAS62U-SeoIAMSouXBH8G8OHI6ij6lmqAUsN-sSR7--_3fUIIbLIIiZWOCRDtG9ANFR2xpPJaOfUTvEV9MSOEosy9Ddh1GnTgGLlAMW8ehJYI6ztsBdSw0RrvDx_C9ZaVj1rgKRO5cMjIfgyIIAFyHKtY2O4ObC7nizq_84RbvJ2aD2kOxktTHzzwWbDk5of9NKIP4hzoN1Hotn6aswYoXItApIVq0DBp44yN_XLY_mfP2bOO0UwFHukl9hzACIY0D04efEvwwkDj6B9pZRmgv-9Ki-KU8Pr9wRhl7Z93uagGcBbstiqQD2o9eZwfUN9CS0GTfLnYyLV78l_oew0KHhdj7TrmOS5ZO790D7G8qmAITMx8ZVGtXd3yF0j2NEPizMrWEcFAa2cUVnewWNM_sXhYJE7mnODM4iB8fyO6ipt1XTLMGK3NX0-mJ1Db9mFYNPWLCMcOz169qusNC2y_A26MDrmVeeBGn5m9HXsNXm653LeOJhhIrAWHwC2EwDgZ04TTfv0Me709sv_6689__rDrM--TWjy_N0X1CzB-JpomrSJqFqu80g_P-vWSRsMsSoCvYXZSYd8LtgTLNar7VrXxEUjKJEUvhp5QHQ6hYj9fRWSEZmkcvg3BmM62-8eATIF3eKP36VEwV2EG8m4bJSRhqWEsW3SD1NiZW8IfRbqbCNuswCcPUf3tqsmsJ7_CkDCSwREvZVfjsAHITTOGsIeaUzEs5O4bADTnfcTqCsdD412Z88zYVG1xL3vX-r4tosSgbzh5QNdZJhDcirDh-wCO6mmVuU0kNBQ-YIxQ06C4X3UPC1xBqI8GR5BDMAR6nnuiodlSxdkGcLUnJK9DMW3ROwhbAvG9uXC7-o0-Y2CQf0_HuEiX3_lq_1fmZ66LVQ5-KudDuRZh7AlArzhsvbgfWU6qf7zcphrT_ViLn9t6XfePAs1xikewOq1bkwxeciyAwYGYz8Snv0E3-wihNXMbeDwg0vNfj12q7Yd1UGmtFbDe_JUpYxDm3K1aHUwvl24pyNMQrtik9_egmEmaPSQNOynZegCwUdZevCWuzXHh0WSXKsp-O1fzqE2AOBF0LJSG6c84qeVCbKNXRg5VXvRnL8SIdzgNMk4cVcVveFBzdaBUdzmlmPG2grjxtwXqJ6ymYVUMOMGV44tumNHCSfn5FFR2YflHnUIe-mhzBYVGc80ZooBt2RumEYgIZzrOxh4uMYCQDGGDNwlxS2Gk5ryMJOwxoNce4Enqd6BPIGwMz3iYB70soM-8nLku0tH0R6B_Mv_v_weHummaCwAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19';

	const eventHandlersMap = new Map([
		['loaded', function () {console.log('PowerBIComponent has loaded');}],
		['rendered', function () {
			console.log('PowerBIComponent has rendered');
		}],
		['error', function (event: service.ICustomEvent<any>) { 
			console.error(event.detail); 
		}]
	]);

  return (
    <Wrapper>
        <Nav />
        <PowerBIEmbed
          embedConfig = { { 
            id: 'f6bfd646-b718-44dc-a378-b73e6b528204',
            type: 'report',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d',
            tokenType: models.TokenType.Embed,
            accessToken: sampleReportToken,
            pageView: 'fitToWidth'
          } }
          eventHandlers = { eventHandlersMap }
          getEmbeddedComponent = { (embedObject:Embed) => {
            console.log(`Embedded object of type "${ embedObject.embedtype }" received`);
          } }
          cssClassName = { 'large-powerbi-component' }
        />

        <br/>
        <Text variant={'xxLargePlus'}>Law Enforcement Accountability Tracker</Text>
        <br/>
        <br/>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg6" >
            <PowerBIEmbed
              embedConfig = { {
                id: 'f6bfd646-b718-44dc-a378-b73e6b528204',
                pageName:'ReportSectioneb8c865100f8508cc533',
                visualName: '47eb6c0240defd498d4b',
                type: 'visual',
                embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d',
                tokenType: models.TokenType.Embed,
                accessToken: sampleReportToken,
                pageView: 'fitToWidth'
              } }
              eventHandlers = { eventHandlersMap }
              getEmbeddedComponent = { (embedObject:Embed) => {
                console.log(`Embedded object of type "${ embedObject.embedtype }" received`);
                
              } }
              cssClassName = { 'small-powerbi-component' }
              />
            </div>
            <div className="ms-Grid-col ms-lg6">
              <Text variant={'xLarge'}>Sample text here </Text>
              <br/>
              <Text variant={'large'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </div>
          </div>
        </div>
    </Wrapper>
  );
}

export default Landing;
