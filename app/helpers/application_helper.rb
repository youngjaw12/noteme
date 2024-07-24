module ApplicationHelper
    def svg_icon(name, options = {})
    file_path = "app/assets/images/icons/#{name}.svg"
    if File.exist?(file_path)
      file = File.read(file_path)
      doc = Nokogiri::HTML::DocumentFragment.parse(file)
      svg = doc.at_css('svg')
      options.each { |attr, value| svg[attr.to_s] = value }
      doc.to_html.html_safe
    else
      "(SVG not found: #{name})"
    end
  end
 
end
