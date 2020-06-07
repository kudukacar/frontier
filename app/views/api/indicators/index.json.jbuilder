@indicators.each do |indicator|
    json.set! indicator[:id] do
        json.extract! indicator, :id, :name, :code, :year, :value, :country_name
    end
end