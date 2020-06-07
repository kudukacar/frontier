class Api::IndicatorsController < ApplicationController
  def index
    @indicators = []
    all_indicators = Indicator.includes(:country, :code)
    all_indicators.each do |indicator|
      formatted_indicator = {}
      formatted_indicator[:id] = indicator.id
      formatted_indicator[:year] = indicator.year
      formatted_indicator[:value] = indicator.value
      formatted_indicator[:country_name] = indicator.country.name 
      formatted_indicator[:code] = indicator.code.code
      formatted_indicator[:name] = indicator.code.name
      @indicators.push(formatted_indicator)
    end
    render :index
  end
end