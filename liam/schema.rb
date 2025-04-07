ActiveRecord::Schema.define(version: 20250408000000) do

    create_table "Python", force: :cascade do |t|
      t.string "Variable"
      t.string "Function"
      t.string "Class"
      t.string "Main_Guard"
    end
  
    create_table "AI", force: :cascade do |t|
      t.string  "Neural_Network"
      t.string  "Deep_Learning"
      t.references :Python, foreign_key: { to_table: :Python }
      t.string  "機械学習フレームワーク"
    end
  
  end
  