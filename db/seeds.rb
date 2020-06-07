# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

Indicator.destroy_all
Code.destroy_all
Country.destroy_all

Country.create(name: "China", code: "CHN")

header = nil
length = nil

CSV.foreach(Rails.root.join('db/WBCHN.csv')).with_index do |row, i|
  if i == 0
    header = row
    length = row.length
  else
    name = row[0]
    code = row[1]
    code = Code.create(name: name, code: code)
    (2...length).each do |column|
      if row[column] != nil
        Indicator.create(year: header[column].to_i, value: row[column], country_id: Country.find_by(name: 'China').id, code_id: code.id)
      end
    end
  end
end