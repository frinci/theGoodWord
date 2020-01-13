class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :author
      t.string :author_title
      t.string :description
      t.string :ingredients
      t.string :category
      t.string :content

      t.timestamps
    end
  end
end
