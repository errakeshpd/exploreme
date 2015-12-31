class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :full_name
      t.text :about_me
      t.text :address
      t.date :dob
      t.string :nationality
      t.integer :gender
      t.text :declaration

      t.timestamps null: false
    end
  end
end
