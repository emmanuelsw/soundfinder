class CreateSounds < ActiveRecord::Migration[5.1]
  def change
    create_table :sounds do |t|
      t.string :name, index: true, null: false
      t.text :sound_data, null: false
      t.references :user, foreign_key: true, index: true
      t.timestamps null: false
    end
  end
end
