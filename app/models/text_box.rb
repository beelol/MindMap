# == Schema Information
#
# Table name: text_boxes
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  text       :string           not null
#  ord        :integer          not null
#  author_id  :integer          not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TextBox < ActiveRecord::Base
end
