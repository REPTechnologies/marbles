class RenameSliderBoundsOnQuestions < ActiveRecord::Migration
  def change
    rename_column :questions, :slidermin, :slider_min
    rename_column :questions, :slidermax, :slider_max
  end
end
