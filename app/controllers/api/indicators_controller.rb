class Api::IndicatorsController < ApplicationController
  def index
    @indicators = Indicator.joins(:country).select('indicators.*, countries.name AS country_name') 
    render :index
  end
end