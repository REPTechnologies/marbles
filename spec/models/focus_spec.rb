require 'spec_helper'

describe Focus do
  it "has a valid factory" do
    expect(build(:focus)).to be_valid
  end
end
