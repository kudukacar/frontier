class CreateIndicators < ActiveRecord::Migration[5.2]
  def change
    create_table :indicators do |t|
      t.string :name, null: false
      t.string :code, null: false
      t.integer :year, null: false
      t.string :value, null: false
      t.integer :country_id, null: false
      t.timestamps
    end
  end
end
