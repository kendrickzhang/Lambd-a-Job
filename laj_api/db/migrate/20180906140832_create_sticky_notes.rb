class CreateStickyNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :sticky_notes do |t|
      t.string :jobListing_url
      t.string :company
      t.string :title
      t.string :location
      t.string :app_status
      t.text :notes
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
