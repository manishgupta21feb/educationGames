import React from "react";

const IntroImages = (props) => {
  const { data } = props;

  return (
    <>
      <div className="intro-popup-img-container">
        <div className="intro-popup-img-1">
          <img
            className="sr-only sr-image alttxt-only"
            alt={data.introImg1AltText}
          />
          <p className="dna-text text-common" aria-hidden="true">
            {data.texts1.dna}
          </p>

          <p className="mRNA-text text-common" aria-hidden="true">
            {data.texts1.mRNA}
          </p>

          <p className="mRNA-text mRNA-text-3 text-common" aria-hidden="true">
            {data.texts1.mRNA}
          </p>

          <p className="nucleus-text text-common" aria-hidden="true">
            {data.texts1.nucleus}
          </p>

          <p className="messengerRNA-text text-common" aria-hidden="true">
            {data.texts1.messengerRNA}
          </p>

          <p className="proteinChain-text text-common" aria-hidden="true">
            {data.texts1.proteinChain}
          </p>

          <p className="aminoAcids-text text-common" aria-hidden="true">
            {data.texts1.aminoAcids}
          </p>

          <p className="transferRNA-text text-common" aria-hidden="true">
            {data.texts1.transferRNA}
          </p>

          <p className="codon-text text-common" aria-hidden="true">
            {data.texts1.codon}
          </p>

          <p className="mRNA-text-2 text-common" aria-hidden="true">
            {data.texts1.mRNA}
          </p>

          <p className="ribosome-text text-common" aria-hidden="true">
            {data.texts1.ribosome}
          </p>

          <p className="cytopiasm-text text-common" aria-hidden="true">
            {data.texts1.cytopiasm}
          </p>

          <p
            className="mRNAMovesOutOfNucleus-text text-common"
            aria-hidden="true"
          >
            {data.texts1.mRNAMovesOutOfNucleus}
          </p>

          <p className="tRNA-text text-common" aria-hidden="true">
            {data.texts1.tRNA}
          </p>

          <div className="right-text-container">
            <p className="dna-right-text right-common" aria-hidden="true">
              {data.texts1.dna}
            </p>

            <div className="down-blue-arrow-container">
              <div className="down-blue-arrow"></div>
            </div>

            <p className="mRNA-right-text right-common" aria-hidden="true">
              {data.texts1.mRNA}
            </p>

            <p className="transcription-text right-common" aria-hidden="true">
              {data.texts1.transcription}
            </p>

            <p className="mRNAAndtRNA-text right-common" aria-hidden="true">
              {data.texts1.mRNAAndtRNA}
            </p>

            <div className="down-green-arrow-container">
              <div className="down-green-arrow"></div>
            </div>

            <p className="protien-text right-common" aria-hidden="true">
              {data.texts1.protien}
            </p>

            <p className="translation-text right-common" aria-hidden="true">
              {data.texts1.translation}
            </p>
          </div>
        </div>

        <div className="intro-popup-img-2">
          <img
            className="sr-only sr-image alttxt2-only"
            alt={data.introImg2AltText}
          />

          <p className="ribosome-text2" aria-hidden="true">
            {data.texts2.ribosome}
          </p>
          <div className="text2-container-aminoAcid">
            <p className="aminoAcid-text2 common-text2" aria-hidden="true">
              {data.texts2.aminoAcid}
            </p>
            <div className="tail"></div>
            <div className="tail-point"></div>
          </div>

          <div className="text2-container-aminoAcidChain">
            <p className="aminoAcidChain-text2 common-text2" aria-hidden="true">
              {data.texts2.aminoAcidChain}
            </p>
            <div className="tail"></div>
            <div className="tail-point"></div>
          </div>

          <div className="text2-container-largeSubunit">
            <p className="largeSubunit-text2 common-text2" aria-hidden="true">
              {data.texts2.largeSubunit}
            </p>
            <div className="tail"></div>
            <div className="tail-point"></div>
          </div>

          <div className="text2-container-smallSubunit">
            <p className="smallSubunit-text2 common-text2" aria-hidden="true">
              {data.texts2.smallSubunit}
            </p>
            <div className="tail"></div>
            <div className="tail-point"></div>
          </div>

          <div className="text2-container-codon">
            <p className="codon-text2 common-text2" aria-hidden="true">
              {data.texts1.codon}
            </p>
            <div className="tail"></div>
            <div className="tail-point"></div>
          </div>

          <div className="text2-container-mRNA">
            <p className="mRNA-text2 common-text2" aria-hidden="true">
              {data.texts1.mRNA}
            </p>
            <div className="tail"></div>
            <div className="tail-point"></div>
          </div>

          <div className="text2-container-tRNA">
            <p className="tRNA-text2 common-text2" aria-hidden="true">
              {data.texts1.tRNA}
            </p>
            <div className="tail"></div>
            <div className="tail-point"></div>
          </div>
        </div>
        <div className="intro-popup-img-3">
          <img
            className="sr-only sr-image alttxt3-only"
            alt={data.introImg3AltText}
          />

          <div className="intro-img-3-top-container">
            <p className="genes-text3 top-common-img3" aria-hidden="true">
              {data.texts3.genes}
            </p>
            <p className="proteins-text3 top-common-img3" aria-hidden="true">
              {data.texts3.proteins}
            </p>
            <p className="traits-text3 top-common-img3" aria-hidden="true">
              {data.texts3.traits}
            </p>
          </div>
          <div className="intro-img-3-left-container">
            <p className="t11p15-text3 left-common-img3" aria-hidden="true">
              - {data.texts3.t11p15}
            </p>
            <p className="t11p11-text3 left-common-img3" aria-hidden="true">
              - {data.texts3.t11p11}
            </p>
            <p className="t11q12-text3 left-common-img3" aria-hidden="true">
              - {data.texts3.t11q12}
            </p>
            <p className="t11q25-text3 left-common-img3" aria-hidden="true">
              - {data.texts3.t11q25}
            </p>
          </div>

          <div className="intro-img-3-right-container">
            <p className="healthy-text3 right-common-img3" aria-hidden="true">
              {data.texts3.healthy}
            </p>
            <p
              className="sickleCellAnemia-text3 right-common-img3"
              aria-hidden="true"
            >
              {data.texts3.sickleCellAnemia}
            </p>
            <p
              className="normalRedBloodCell-text3 right-common-img3"
              aria-hidden="true"
            >
              {data.texts3.normalRedBloodCell}
            </p>
            <p
              className="sickleRedBloodCell-text3 right-common-img3"
              aria-hidden="true"
            >
              {data.texts3.sickleRedBloodCell}
            </p>
            <p
              className="unrestrictedBloodFlow-text3 right-common-img3"
              aria-hidden="true"
            >
              {data.texts3.unrestrictedBloodFlow}
            </p>
            <p
              className="sickleCellsBlockingBloodFlow-text3 right-common-img3"
              aria-hidden="true"
            >
              {data.texts3.sickleCellsBlockingBloodFlow}
            </p>
          </div>
          <p className="chromosome11-text3" aria-hidden="true">
            {data.texts3.chromosome11}
          </p>
          <p className="hbs-text3" aria-hidden="true">
            {data.texts3.hbs}
          </p>
          <p className="hbb-text3" aria-hidden="true">
            {data.texts3.hbb}
          </p>
          <p className="p-text3" aria-hidden="true">
            {data.texts3.p}
          </p>
          <p className="q-text3" aria-hidden="true">
            {data.texts3.q}
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroImages;
