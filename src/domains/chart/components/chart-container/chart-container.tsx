import React, { ReactNode } from "react"

import { Attributes } from "../../utils/transformDataAttributes"
import { ChartMetadata } from "../../chart-types"
import { ChartWithLoader } from "../chart-with-loader"
import { DisableOutOfView } from "../disable-out-of-view"
import { DropdownMenu } from "../chart-dropdown"

export type Props = {
  attributes: Attributes
  // warning! this is not the same as chartId in old dashboard
  // here, the chartID must be unique across all agents
  chartUuid: string
  customElementForDygraph?: ReactNode
  portalNode: HTMLElement
  chartMetadata?: ChartMetadata | undefined
  dropdownMenu?: DropdownMenu
}

export const ChartContainer = ({
  attributes,
  chartMetadata,
  chartUuid,
  customElementForDygraph,
  dropdownMenu,
  portalNode,
}: Props) => (
  <DisableOutOfView
    attributes={attributes}
    portalNode={portalNode}
    chartUuid={chartUuid}
  >
    <ChartWithLoader
      attributes={attributes}
      chartUuid={chartUuid}
      customElementForDygraph={customElementForDygraph}
      dropdownMenu={dropdownMenu}
      externalChartMetadata={chartMetadata}
      portalNode={portalNode}
    />
  </DisableOutOfView>
)
